import { expect as expectChai } from 'chai'

describe('11 Test exercise scenario from TEST Exercise  ', async()=>
{

it('checkin  url https://github.com/ (200)', async()=>
    {
        await browser.url("https://github.com/")
        await browser.getTitle();
        await browser.pause(2000)
        
        const description = await $("meta[name='description']")
        console.log(await description.getValue()) 
        await browser.pause(2000)

        
       //не всиг я поресьорчити щоб закінчити останнє завдання. 




    })

    
})
