import { getMultilineInput, } from '@actions/core'

const url = getMultilineInput("url")
console.log("url:", JSON.stringify(url))