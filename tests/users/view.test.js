import chai from 'chai'
import UsersView from '../../src/app/users/view'

const expect = chai.expect
const view = new UsersView()

describe('UsersView', () => {
    
    it('should have properties', () => {
        expect(view.template).to.exist
        expect(view.collection).to.exist
    })
    
    it('should have methods', () => {
        expect(view.serializeData).to.be.an('function')
    })
    
    it('should serialize data', () => {
        const data = view.serializeData()
        expect(data.users).to.exist
        expect(data.users).to.be.an('array')
    })
    
    it('should render', () => {
        view.render()
        expect(view.$el.find('h2').text()).to.equal('Usuarios')
    })
    
})