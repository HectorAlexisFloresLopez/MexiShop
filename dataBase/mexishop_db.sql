-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`categoria` (
  `cat_id` INT NOT NULL AUTO_INCREMENT,
  `cat_nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`cat_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`producto` (
  `prod_id` INT NOT NULL,
  `prod_nombre` VARCHAR(45) NOT NULL,
  `prod_linkimg` VARCHAR(500) NOT NULL,
  `prod_desc` VARCHAR(500) NOT NULL,
  `categoria_cat_id` INT NOT NULL,
  `inventario_cant` INT NOT NULL,
  PRIMARY KEY (`prod_id`, `categoria_cat_id`),
  INDEX `fk_producto_categoria1_idx` (`categoria_cat_id` ASC) VISIBLE,
  CONSTRAINT `fk_producto_categoria1`
    FOREIGN KEY (`categoria_cat_id`)
    REFERENCES `mydb`.`categoria` (`cat_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`usuarios` (
  `us_id` INT NOT NULL AUTO_INCREMENT,
  `us_nombre` VARCHAR(45) NOT NULL,
  `us_tel` INT NOT NULL,
  `us_email` VARCHAR(45) NOT NULL,
  `us_contrasena` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`us_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`compra`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`compra` (
  `carr_id` INT NOT NULL AUTO_INCREMENT,
  `total_de_compra` INT NOT NULL,
  `usuarios_us_id` INT NOT NULL,
  PRIMARY KEY (`carr_id`, `usuarios_us_id`),
  INDEX `fk_compra_usuarios1_idx` (`usuarios_us_id` ASC) VISIBLE,
  CONSTRAINT `fk_compra_usuarios1`
    FOREIGN KEY (`usuarios_us_id`)
    REFERENCES `mydb`.`usuarios` (`us_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`carrito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`carrito` (
  `carrito_id` INT NOT NULL AUTO_INCREMENT,
  `prod_cantidad` INT NOT NULL,
  `compra_carr_id` INT NOT NULL,
  `producto_prod_id` INT NOT NULL,
  `producto_categoria_cat_id` INT NOT NULL,
  PRIMARY KEY (`carrito_id`, `compra_carr_id`, `producto_prod_id`, `producto_categoria_cat_id`),
  INDEX `fk_carrito_compra1_idx` (`compra_carr_id` ASC) VISIBLE,
  INDEX `fk_carrito_producto1_idx` (`producto_prod_id` ASC, `producto_categoria_cat_id` ASC) VISIBLE,
  CONSTRAINT `fk_carrito_compra1`
    FOREIGN KEY (`compra_carr_id`)
    REFERENCES `mydb`.`compra` (`carr_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_carrito_producto1`
    FOREIGN KEY (`producto_prod_id` , `producto_categoria_cat_id`)
    REFERENCES `mydb`.`producto` (`prod_id` , `categoria_cat_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
