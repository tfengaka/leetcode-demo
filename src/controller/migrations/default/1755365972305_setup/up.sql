CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE users (
  id VARCHAR(255) PRIMARY KEY,
  display_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  role VARCHAR(50) NOT NULL CHECK (role IN ('student', 'teacher', 'admin')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);
-- 
CREATE OR REPLACE FUNCTION update_updated_at_column() RETURNS TRIGGER AS $$ BEGIN NEW.updated_at = NOW();
RETURN NEW;
END;
$$ language 'plpgsql';
CREATE TRIGGER update_users_updated_at BEFORE
UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TABLE problems (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  code VARCHAR(255) NOT NULL,
  difficulty VARCHAR(50) NOT NULL CHECK (difficulty IN ('easy', 'medium', 'hard')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);
-- 
CREATE TRIGGER update_problems_updated_at BEFORE
UPDATE ON problems FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
-- 
CREATE SEQUENCE problem_code_seq START 1;
CREATE OR REPLACE FUNCTION generate_problem_code() RETURNS TRIGGER AS $$
DECLARE next_val INT;
BEGIN
SELECT nextval('problem_code_seq') INTO next_val;
NEW.code := 'P' || lpad(next_val::TEXT, 6, '0');
RETURN NEW;
END;
$$ language 'plpgsql';
-- 
CREATE TRIGGER before_insert_problems BEFORE
INSERT ON problems FOR EACH ROW EXECUTE FUNCTION generate_problem_code();
CREATE TABLE test_cases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  problem_id UUID NOT NULL,
  input TEXT NOT NULL,
  expected_output TEXT NOT NULL,
  is_sample BOOLEAN NOT NULL DEFAULT FALSE,
  FOREIGN KEY (problem_id) REFERENCES problems(id) ON DELETE CASCADE
);
-- 
CREATE TABLE user_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id VARCHAR(255) NOT NULL,
  problem_id UUID NOT NULL,
  raw_submission TEXT,
  submission_id INT NOT NULL,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (problem_id) REFERENCES problems(id) ON DELETE CASCADE,
  FOREIGN KEY (submission_id) REFERENCES submissions(id) ON DELETE CASCADE
);