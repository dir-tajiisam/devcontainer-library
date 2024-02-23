terraform {
  required_version = ">= 0.12"
  required_providers {
    local = {
      source  = "hashicorp/local"
      version = "2.4.1"
    }
  }
}

resource "local_file" "helloworld" {
  content  = "hello world!"
  filename = "hello.txt"
}
