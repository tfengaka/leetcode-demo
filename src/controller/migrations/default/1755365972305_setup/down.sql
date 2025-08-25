-- Cần gỡ bỏ bảng phụ thuộc trước
DROP TABLE IF EXISTS user_submissions CASCADE;
-- Gỡ bỏ bảng test_cases
-- Cần gỡ bỏ bảng phụ thuộc trước
DROP TABLE IF EXISTS test_cases CASCADE;
-- Gỡ bỏ trigger và function tự động tạo mã bài tập
DROP TRIGGER IF EXISTS before_insert_problems ON problems;
DROP FUNCTION IF EXISTS generate_problem_code() CASCADE;
DROP SEQUENCE IF EXISTS problem_code_seq;
-- Gỡ bỏ trigger và function cập nhật thời gian
DROP TRIGGER IF EXISTS update_problems_updated_at ON problems;
DROP TRIGGER IF EXISTS update_users_updated_at ON users;
DROP FUNCTION IF EXISTS update_updated_at_column() CASCADE;
-- Gỡ bỏ bảng problems
DROP TABLE IF EXISTS problems CASCADE;
-- Gỡ bỏ bảng users
DROP TABLE IF EXISTS users CASCADE;