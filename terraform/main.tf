terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0"
    }
  }
  }

provider "docker" {}

# Image Frontend spécifiquement construite
resource "docker_image" "frontend_build" {
  name         = "frontend_build"
  build {
    context    = "./../Frontend"
    dockerfile = "Dockerfile"
  }
}

# Conteneur Frontend à partir de l'image construite
resource "docker_container" "frontend_container" {
  name  = "frontend_container"
  image = "frontend_build:latest"
  ports {
    internal = 80
    external = 8084
  }
}
