import { Map, setWorkerUrl } from "maplibre-gl"
import 'maplibre-gl/dist/maplibre-gl.css'
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url'

setWorkerUrl(workerUrl)

export class GameController {
    private viewport: HTMLDivElement | null = null

    private map: Map | null = null

    attachRenderer(viewport: HTMLDivElement) {
        this.viewport = viewport

        this.map = new Map({
            container: this.viewport,
            style: {
                version: 8,
                sources: {},
                layers: [
                    {
                        id: 'background',
                        type: 'background',
                        paint: {
                            'background-color': '#000000'
                        }
                    }
                ]
            },
            center: [0, 0], // starting position [lng, lat]
            zoom: 2 // starting zoom
        })
    }

    dispose() {
        this.map?.remove()
    }
}