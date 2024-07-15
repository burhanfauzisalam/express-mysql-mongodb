CREATE TABLE `seb` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `url` VARCHAR(255) NOT NULL,
  `filename` VARCHAR(255) NOT NULL,
  `teacher` VARCHAR(255) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  PRIMARY KEY (`id`),
  UNIQUE (`filename`),
  FOREIGN KEY (`teacher`) REFERENCES `teachers`(`id`) ON DELETE CASCADE
)


CREATE TABLE `teachers` (
  `id` VARCHAR(255) NOT NULL,
  `username` VARCHAR(255) NOT NULL ,
  `password` VARCHAR(255) NOT NULL ,
  `role` VARCHAR(255) NOT NULL ,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `whatsapp` INT NOT NULL,
  `gender` BOOLEAN NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  PRIMARY KEY (`id`),
  UNIQUE (`username`,`email`, `whatsapp`) 
)

CREATE TABLE `parents` (
  `id` VARCHAR(255) NOT NULL,
  `role` VARCHAR(255) NOT NULL ,
  `username` VARCHAR(255) NOT NULL ,
  `password` VARCHAR(255) NOT NULL ,
  `father` VARCHAR(255) NOT NULL,
  `mother` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `whatsapp` INT NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  PRIMARY KEY (`id`),
  UNIQUE (`username`,`email`, `whatsapp`) 
)

CREATE TABLE `students` (
  `id` VARCHAR(255) NOT NULL,
  `parent_id` VARCHAR(255) NOT NULL,
  `username` VARCHAR(255) NOT NULL ,
  `password` VARCHAR(255) NOT NULL ,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `whatsapp` INT NOT NULL,
  `gender` BOOLEAN NOT NULL,
  `grade` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE (`username`, `email`, `whatsapp`),
  FOREIGN KEY (`parent_id`) REFERENCES `parents`(`id`) ON DELETE CASCADE
)


CREATE TABLE `classroom` (
  `id` VARCHAR(255) NOT NULL,
  `class` VARCHAR(255) NOT NULL,
  `grade` VARCHAR(255) NOT NULL,
  `teacher` VARCHAR(255) NOT NULL,
  `students` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE (`grade`),
  FOREIGN KEY (`teacher`) REFERENCES `teachers`(`id`) ON DELETE CASCADE
)