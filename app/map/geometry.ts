import type { SimPoint } from '#shared/sim/geometry'

/** 
 * The number of meters represented in a geographic degree of lat/long at the equator, where our
 * simulation is based in the map world.
 */
const METERS_PER_DEGREE = 111_319.5

/** A point in the map world (latitude/longitude coordinates in degrees) */
export type MapPoint = {
    lat: number
    long: number
}

/** Convert a sim world point (meters) into map coordiantes (degrees) */
export function simToMapPoint(point: SimPoint): MapPoint {
    return {
        lat: point.x / METERS_PER_DEGREE,
        long: point.y / METERS_PER_DEGREE,
    }
}

export function mapToSimPoint(point: MapPoint): SimPoint {
    return {
        x: point.lat * METERS_PER_DEGREE,
        y: point.long * METERS_PER_DEGREE,
    }
}
