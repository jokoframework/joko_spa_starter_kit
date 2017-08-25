import Mn from 'backbone.marionette'
import Template from './template.hbs'
import Collection from './collection'

export default Mn.View.extend({
    
    template: Template,
    
    initialize() {
        this.collection = new Collection()
        this.collection.on('sync', this.render)
        this.collection.fetch()
    },
    
    serializeData() {
        return {
            posts: this.collection.models
        }
    }
    
})