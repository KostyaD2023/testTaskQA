import { expect as expectChai } from 'chai'

describe('Test scenario from TEST Exercise  ', async()=>
{

it('moving to login page', async()=>
    {
        await browser.url(" http://the-internet.herokuapp.com/")
        await $("a[href='/login']") .click()//знаходить елемент кнопку і натискає
        await browser.pause(7000)

    })

it('Login process', async()=>
    {
        await browser.url(" http://the-internet.herokuapp.com/login")
       
        await $("#username").setValue ("tomsmith")// dвводимо перше значення 
        await browser.pause(2000)

        await $("#password").setValue ("SuperSecretPassword!")// dвводимо перше значення
        await browser.pause(2000)

        await $ ("button[type='submit']") .click() 
        await browser.pause(5000)

    })



}
)