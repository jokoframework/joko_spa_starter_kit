import chai from 'chai'
import App from '../src/app/app'

const expect = chai.expect
const app = new App()

describe('App', () => {
    
    before(() => {
        fixture.setBase('src')
        fixture.load('index.html')
    })
    
    it('should have methods', () => {
        expect(app.onStart).to.be.an('function')
    })
    
    it('should have router', () => {
        app.start()
        expect(app.Router).to.exist
    })
    
})