ALTER TABLE ONLY public.submissions
ADD CONSTRAINT submissions_token_key UNIQUE (token);
CREATE INDEX index_submissions_on_token ON public.submissions USING btree (token);