# Event Parser Github Action

This action parses an input of choice, such as something from the Github Event API, eg: `{{ github.event.comment.body }}`, looks for an identifier in the comment
to validate whether it should be parsed, and attempts to parse `key=value` tokens from the input and output them as variables.

Note, unless you lock this down some how it's wise to only use it on private repositories for now.

## Why?

This can be used to optionally trigger workflows when a user comments in a PR, for example you may want to trigger a test deployment, or run a specific test suite.

An example of a comment could be:

`+deploy env=test url=hello.world.test.com`

or

`+tests browser=chrome

## Input

### `source`

**Required** The input to parse, eg `{{ github.event.comment.body }}`

### `identifier`

**Required** The identifier token to qualify the message for parsing, eg `+deploy` or `+tests`

## Output

### 

## Example Usage

```

```
