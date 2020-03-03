# Event Parser Github Action

This action parses an input of choice, such as something from the Github Event API, eg: `{{ github.event.comment.body }}`, 
and attempts to parse `key=value` tokens from the input and output them as variables.

Unless you lock this down somehow it's wise to only use it on private repositories for now.

Happy to accept PRs to optionally check CODEOWNERS, or something similar.

## Why?

This can be used to optionally trigger workflows when a user comments in a PR, for example you may want to trigger a test deployment, or run a specific test suite.

An example of a comment could be:

`+deploy env=test url=hello.world.test.com`

or

`+tests browser=chrome`

## Input

### `source`

**Required** The input to parse, eg `${{ github.event.comment.body }}`

### `variables`

**Required** A list of the variables you wish to parse separated by a new line. Or just a single variable.

## Example Usage

```
on: 
  pull_request_review_comment:
    - created

jobs:
  test_job:
    runs-on: ubuntu-latest
    name: An example workflow
    if: contains(github.event.comment.body, '+deploy')
    steps:
      - name: Extract vars
        uses: ./
        id: vars
        with:
          source: ${{ github.event.comment.body }}
          variables: |
            env
            url
      - name: Do something with env vars...
        run: |
          echo ${{ steps.vars.outputs.env }}
          echo ${{ steps.vars.outputs.url }}
```
