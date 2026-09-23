import type { WorldPoint } from "../geometry"
import type { Id } from "../ids"


export type RoadId = Id<"Road">

export function createRoadId(): RoadId {
    return crypto.randomUUID() as RoadId
}

export type RoadClass =
  | 'local'
  | 'collector'
  | 'arterial'
  | 'highway'

export type RoadStructure =
  | 'ground'
  | 'bridge'
  | 'tunnel'

/** A road in the simulation space (navigation node/link are handled separately) */
export type Road = {
    id: RoadId

    geometry: WorldPoint[]

    roadClass: RoadClass

    lanesForward: number
    lanesBackward: number

    /** Speed in meters/second */
    speedLimitMps: number

    layer: number
    structure: RoadStructure
}
