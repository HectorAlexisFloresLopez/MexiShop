-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema world
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema world
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `world` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
-- -----------------------------------------------------
-- Schema mexishopdb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mexishopdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mexishopdb` ;
USE `world` ;

-- -----------------------------------------------------
-- Table `world`.`country`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `world`.`country` (
  `Code` CHAR(3) NOT NULL DEFAULT '',
  `Name` CHAR(52) NOT NULL DEFAULT '',
  `Continent` ENUM('Asia', 'Europe', 'North America', 'Africa', 'Oceania', 'Antarctica', 'South America') NOT NULL DEFAULT 'Asia',
  `Region` CHAR(26) NOT NULL DEFAULT '',
  `SurfaceArea` DECIMAL(10,2) NOT NULL DEFAULT '0.00',
  `IndepYear` SMALLINT NULL DEFAULT NULL,
  `Population` INT NOT NULL DEFAULT '0',
  `LifeExpectancy` DECIMAL(3,1) NULL DEFAULT NULL,
  `GNP` DECIMAL(10,2) NULL DEFAULT NULL,
  `GNPOld` DECIMAL(10,2) NULL DEFAULT NULL,
  `LocalName` CHAR(45) NOT NULL DEFAULT '',
  `GovernmentForm` CHAR(45) NOT NULL DEFAULT '',
  `HeadOfState` CHAR(60) NULL DEFAULT NULL,
  `Capital` INT NULL DEFAULT NULL,
  `Code2` CHAR(2) NOT NULL DEFAULT '',
  PRIMARY KEY (`Code`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `world`.`city`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `world`.`city` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `Name` CHAR(35) NOT NULL DEFAULT '',
  `CountryCode` CHAR(3) NOT NULL DEFAULT '',
  `District` CHAR(20) NOT NULL DEFAULT '',
  `Population` INT NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  INDEX `CountryCode` (`CountryCode` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 4080
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `world`.`countrylanguage`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `world`.`countrylanguage` (
  `CountryCode` CHAR(3) NOT NULL DEFAULT '',
  `Language` CHAR(30) NOT NULL DEFAULT '',
  `IsOfficial` ENUM('T', 'F') NOT NULL DEFAULT 'F',
  `Percentage` DECIMAL(4,1) NOT NULL DEFAULT '0.0',
  PRIMARY KEY (`CountryCode`, `Language`),
  INDEX `CountryCode` (`CountryCode` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

USE `mexishopdb` ;

-- -----------------------------------------------------
-- Table `mexishopdb`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mexishopdb`.`usuarios` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `tel` INT NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `contrasena` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mexishopdb`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mexishopdb`.`categorias` (
  `cate_id` INT NOT NULL AUTO_INCREMENT,
  `nombre_cat` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`cate_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mexishopdb`.`producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mexishopdb`.`producto` (
  `product_id` INT NOT NULL,
  `prod_nombr` VARCHAR(45) NOT NULL,
  `prod_link` VARCHAR(500) NOT NULL,
  `prod_desc` VARCHAR(500) NOT NULL,
  `inventario_cant` VARCHAR(45) NOT NULL,
  `categorias_cate_id` INT NOT NULL,
  PRIMARY KEY (`product_id`, `categorias_cate_id`),
  INDEX `fk_producto_categorias_idx` (`categorias_cate_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mexishopdb`.`compra`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mexishopdb`.`compra` (
  `idcompra` INT NOT NULL,
  `total_compra` INT NULL,
  `usuarios_user_id` INT NOT NULL,
  PRIMARY KEY (`idcompra`, `usuarios_user_id`),
  INDEX `fk_compra_usuarios1_idx` (`usuarios_user_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mexishopdb`.`prod_compra`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mexishopdb`.`prod_compra` (
  `idprod_compra` INT NOT NULL AUTO_INCREMENT,
  `compra_idcompra` INT NOT NULL,
  `compra_usuarios_user_id` INT NOT NULL,
  `producto_product_id` INT NOT NULL,
  `producto_categorias_cate_id` INT NOT NULL,
  PRIMARY KEY (`idprod_compra`, `compra_idcompra`, `compra_usuarios_user_id`, `producto_product_id`, `producto_categorias_cate_id`),
  INDEX `fk_prod_compra_compra1_idx` (`compra_idcompra` ASC, `compra_usuarios_user_id` ASC) VISIBLE,
  INDEX `fk_prod_compra_producto1_idx` (`producto_product_id` ASC, `producto_categorias_cate_id` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
