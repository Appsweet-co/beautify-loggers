#!/usr/bin/env bash

########

RED="\e[31m"
GREEN="\e[32m"
YELLOW="\e[33m"
BLUE="\e[34m"
MAGENTA="\e[35m"
CYAN="\e[36m"

RESET="\e[0m"

########

MSG_DEBUG="${MAGENTA}==> [DEBUG]"
MSG_DOCS="${CYAN}==> [DOCS]"
MSG_ERROR="${RED}==> [ERROR]"
MSG_INFO="${BLUE}==> [INFO]"
MSG_OK="${GREEN}==> [OK]"
MSG_WARN="${YELLOW}==> [WARN]"

MSG_END="${RESET}"

########

function logger-debug {
  printf '%b\n' "${MSG_DEBUG} ${2-👾}  ${1} ${MSG_END}"
}
export -f logger-debug

function logger-docs {
  printf '%b\n' "${MSG_DOCS} ${2-📝}  ${1} ${MSG_END}"
}
export -f logger-docs

function logger-error {
  printf '%b\n' "${MSG_ERROR} ${2-💥}  ${1} ${MSG_END}"
}
export -f logger-error

function logger-info {
  printf '%b\n' "${MSG_INFO} ${2-ℹ️}  ${1} ${MSG_END}"
}
export -f logger-info

function logger-ok {
  printf '%b\n' "${MSG_OK} ${2-✅}  ${1} ${MSG_END}"
}
export -f logger-ok

function logger-warn {
  printf '%b\n' "${MSG_WARN} ${2-⚠️}  ${1} ${MSG_END}"
}
export -f logger-warn
