alter table "public"."problems" drop column "descriptions" cascade,
  add column "description" text null;