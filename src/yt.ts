import { HandlerTable } from "./types/handlerTable";

class EventHandler {
    handlerTable: HandlerTable;

    constructor() {
        this.handlerTable = {
            names: [],
            handlers: []
        };
    }

    /*
    fireEvent(name: string, arg: string) {
        if (this.handlerTable[name] == null) return;
        const handlers = this.handlerTable[name];

        for (let i = 0; i < handlers.length; i++) {
            handlers[i](arg);
        }
    }
    */

    // eslint-disable-next-line @typescript-eslint/ban-types
    addHandler(name: string, fn: Function) {
        if (this.handlerTable[name]) 
    }
}

const yt = {
    EventHandler: new EventHandler(),
    VideoQualityConstants: {
        AUTO: 0,
        LOW: 1,
        HIGH: 2,
    }
};

export { yt };