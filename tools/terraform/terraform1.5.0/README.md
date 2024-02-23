# How To Use

## Hello World

ローカルに`hello.txt`を作成する Terraform

- terraform init
  - プラグインのダウンロード

```shell
$ terraform init

> Initializing the backend...
>
> Initializing provider plugins...
> - Reusing previous version of hashicorp/local from the dependency lock file
> - Using previously-installed hashicorp/local v2.4.1
>
> Terraform has been successfully initialized!
>
> You may now begin working with Terraform. Try running "terraform plan" to see
> any changes that are required for your infrastructure. All Terraform commands
> should now work.
>
> If you ever set or change modules or backend configuration for Terraform,
> rerun this command to reinitialize your working directory. If you forget, other
> commands will detect it and remind you to do so if necessary.
```

- terraform plan
  - 実行する内容を確認

```shell
$ terraform plan

> Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
>   + create
>
> Terraform will perform the following actions:
>
>   # local_file.helloworld will be created
>   + resource "local_file" "helloworld" {
>       + content              = "hello world!"
>       + content_base64sha256 = (known after apply)
>       + content_base64sha512 = (known after apply)
>       + content_md5          = (known after apply)
>       + content_sha1         = (known after apply)
>       + content_sha256       = (known after apply)
>       + content_sha512       = (known after apply)
>       + directory_permission = "0777"
>       + file_permission      = "0777"
>       + filename             = "hello.txt"
>       + id                   = (known after apply)
>     }
>
> Plan: 1 to add, 0 to change, 0 to destroy.
```

- terraform apply
  - 実行（途中で yes と入力する）

```shell
$ terraform apply

> Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
>   + create
>
> Terraform will perform the following actions:
>
>   # local_file.helloworld will be created
>   + resource "local_file" "helloworld" {
>       + content              = "hello world!"
>       + content_base64sha256 = (known after apply)
>       + content_base64sha512 = (known after apply)
>       + content_md5          = (known after apply)
>       + content_sha1         = (known after apply)
>       + content_sha256       = (known after apply)
>       + content_sha512       = (known after apply)
>       + directory_permission = "0777"
>       + file_permission      = "0777"
>       + filename             = "hello.txt"
>       + id                   = (known after apply)
>     }
>
> Plan: 1 to add, 0 to change, 0 to destroy.
>
> Do you want to perform these actions?
>   Terraform will perform the actions described above.
>   Only 'yes' will be accepted to approve.
>
>   Enter a value: yes
>
> local_file.helloworld: Creating...
> local_file.helloworld: Creation complete after 0s [id=430ce34d020724ed75a196dfc2ad67c77772d169]
```

※`hello.txt`が作成されているのが確認できる

- terraform destroy
  - リソースの削除（途中で yes と入力する）

```shell
$ terraform destroy

> local_file.helloworld: Refreshing state... [id=430ce34d020724ed75a196dfc2ad67c77772d169]
>
> Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
>   - destroy
>
> Terraform will perform the following actions:
>
>   # local_file.helloworld will be destroyed
>   - resource "local_file" "helloworld" {
>       - content              = "hello world!" -> null
>       - content_base64sha256 = "dQnlvaDHYtK6x/kNdYtbImP6Acy8VCq1498WO+CObKk=" -> null
>       - content_base64sha512 = "25sc0yYt7jd1agm5BklzWJhHyqjlPTGp0ULqJwGxsoq9l4OLuaJwaLowXcjQSkWh/PB53lTWB2ZplrPMVPa2fA==" -> null
>       - content_md5          = "fc3ff98e8c6a0d3087d515c0473f8677" -> null
>       - content_sha1         = "430ce34d020724ed75a196dfc2ad67c77772d169" -> null
>       - content_sha256       = "7509e5bda0c762d2bac7f90d758b5b2263fa01ccbc542ab5e3df163be08e6ca9" -> null
>       - content_sha512       = "db9b1cd3262dee37756a09b9064973589847caa8e53d31a9d142ea2701b1b28abd97838bb9a27068ba305dc8d04a45a1fcf079de54d607666996b3cc54f6b67c" -> null
>       - directory_permission = "0777" -> null
>       - file_permission      = "0777" -> null
>       - filename             = "hello.txt" -> null
>       - id                   = "430ce34d020724ed75a196dfc2ad67c77772d169" -> null
>     }
>
> Plan: 0 to add, 0 to change, 1 to destroy.
>
> Do you really want to destroy all resources?
>   Terraform will destroy all your managed infrastructure, as shown above.
>   There is no undo. Only 'yes' will be accepted to confirm.
>
>   Enter a value: yes
>
> local_file.helloworld: Destroying... [id=430ce34d020724ed75a196dfc2ad67c77772d169]
> local_file.helloworld: Destruction complete after 0s
>
> Destroy complete! Resources: 1 destroyed.
```

※`hello.txt`が削除されているのが確認できる

## Lint

- terraform のファイルをチェックする

```shell
$ npm run lint

> 2 issue(s) found:
>
> Warning: terraform "required_version" attribute is required (terraform_required_version)
>
>   on  line 0:
>    (source code not available)
>
> Reference: https://github.com/terraform-linters/tflint-ruleset-terraform/blob/v0.4.0/docs/rules/terraform_required_version.md
>
> Warning: Missing version constraint for provider "local" in `required_providers` (terraform_required_providers)
>
>   on main.tf line 1:
>    1: resource "local_file" "helloworld" {
>
> Reference: https://github.com/terraform-linters/tflint-ruleset-terraform/blob/v0.4.0/docs/rules/terraform_required_providers.md
```

## Create Document

- terraform のドキュメント(./TERRAFORM.md)を作成する

```shell
$ npm run docs

> terraform template@0.1.0 docs
> terraform-docs md . > 'TERRAFORM.md'

```

# Troubleshooting

## Rebuild した場合に以下のエラーが発生

![alt text](images/image.png)

Reload Window を実行する

![alt text](images/image2.png)
