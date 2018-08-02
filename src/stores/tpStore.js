import * as mobx from 'mobx';
import {action, computed, decorate, observable} from 'mobx';

// const { ipcRenderer } = window.require('electron');

mobx.configure({enforceActions: true});

class TpStore {
    start = Date.now();
    current = Date.now();

    get elapsedTime() {
        return this.current - this.start + "milliseconds";
    }

    tick = () => {
        // ipcRenderer.send('TEST123', 'Pig');
        console.log('Testers');
    }
}

decorate(TpStore, {
    start: observable,
    current: observable,
    elapsedTime: computed,
    tick: action
});
export default new TpStore();