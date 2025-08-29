alter table "public"."problems" drop column "description" cascade,
  add column "descriptions" json null;