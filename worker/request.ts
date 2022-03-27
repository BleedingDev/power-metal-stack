import { createRequestHandler, handleAsset } from "@remix-run/cloudflare"

// @ts-ignore @ts-expect-error
import * as build from "../build"

export const handleRequest = createRequestHandler({ build })

export const handleEvent = async (event: FetchEvent) => {
  return (await handleAsset(event, build)) || handleRequest(event)
}
