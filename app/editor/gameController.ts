import { Map } from "maplibre-gl"

export class GameController {
    private viewport: HTMLDivElement | null = null

    private map: Map | null = null

    attachRenderer(viewport: HTMLDivElement) {
        this.viewport = viewport

        this.map = new Map({
            container: this.viewport,
            style: 'https://tiles.openfreemap.org/styles/liberty', // style URL
            center: [0, 0], // starting position [lng, lat]
            zoom: 2 // starting zoom
        })
    }

    dispose() {
        this.map?.remove()
    }
}