import React from 'react'
import Container from './UI/container'
function Inquiry({ inquiry, setinquriy }: any) {

    return (

        <Container className="grid grid-cols-1 gap-7 items-center absolute inset-0" onClick={() => setinquriy(false)}>
            <div>
                <form className="grid w-full gap-7 items-center bg-white md:p-12 p-10 rounded-[10px] shadow-[0px_10px_40px_rgba(191,191,191,0.3)] max-w-[650px] mx-auto relative">
                    <div className='bg-black text-white w-fit p-2 absolute top-0 right-0 cursor-pointer' onClick={() => setinquriy(false)}>Close</div>
                    <div className="w-full">
                        <label htmlFor='name' className="text-sm font-medium leading-none hidden">Name</label>
                        <input
                            className="text-base font-normal shadow-[0px_0px_30px_rgba(191,191,191,0.3)] bg-white px-5 py-3 border border-transparent focus:border focus:border-black/10 outline-none rounded-[5px] w-full"
                            type="text"
                            id='name'
                            placeholder="Geef uw naam en voornaam in ..." />
                    </div>
                    <div className="w-full">
                        <label htmlFor='email' className="text-sm font-medium leading-none hidden">Email  Address</label>
                        <input
                            className="text-base font-normal shadow-[0px_0px_30px_rgba(191,191,191,0.3)] bg-white px-5 py-3 border border-transparent focus:border focus:border-black/10 outline-none rounded-[5px] w-full"
                            type="email"
                            id='email'
                            placeholder="Geef een geldig e-mailadres in ..." />
                    </div>
                    <div className="w-full">
                        <label htmlFor='detail' className="text-sm font-medium leading-none hidden">Project Detail</label>
                        <textarea
                            className="text-base font-normal shadow-[0px_0px_30px_rgba(191,191,191,0.3)] bg-white px-5 py-3 border border-transparent focus:border focus:border-black/10 outline-none rounded-[5px] w-full"
                            id='detail'
                            rows={5}
                            placeholder="Geef uw vraag in of boek uw rijles (theorie en/of praktijk) bij Rijschool Menig."></textarea>
                    </div>
                    <div className="w-full">
                        <button type='submit' className="text-base font-semibold text-white bg-primary hover:bg-black px-4 py-3 rounded-[5px] w-full">
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </Container>

    )
}

export default Inquiry