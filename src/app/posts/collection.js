import Bn from 'backbone'
import env from '../env'

export default Bn.Collection.extend({
    
    url: `${env.API}/posts`
    
})