import Bn from 'backbone'
import Mn from 'backbone.marionette'
import Router from './router'
import RootView from './root/view'

export default Mn.Application.extend({
    
    region: '#main',
    
    onStart() {
        const rootView = new RootView()
        this.showView(rootView)
        this.Router = new Router({controller: rootView})
        Bn.history.start({pushState: true})
    }
    
})