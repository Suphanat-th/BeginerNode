import { request } from "https"
import type { NextApiResponse,NextApiRequest } from "next" 
// server.js
const port = process.env.PORT_WEB

const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: process.env.HOST, 
  user:process.env.USER, 
  password: process.env.PASSWORD,
  connectionLimit: 5
});

const initMaria = async ()=>{
  let conn;
  console.log(`Conn ${conn}`)
  try {
	conn = await pool.getConnection();
  console.log(`pool get connection ${conn}`)
	const rows = await conn.query("SELECT 1 as val");
	console.log(rows); //[ {val: 1}, meta: ... ]
	// const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);

  } catch (err) {
    console.log(`Error Connection ${err}`)
	throw err;
  } finally {
	if (conn) return conn.end();
  }
}


export default async function Home() {
  console.log(`Application port is ${port}`)
  await initMaria();
  return (
    <div className="container m-auto">
      <div className="grid grid-cols-2">
        <div className='col-span-2 grid grid-cols-2 m-3'>
          <div className='row-span-2 flex justify-center items-center'>
            <span className=' rounded-full bg-black w-12 h-12'>

            </span>
          </div>
          <div className='font-bold'>
            SHOP
          </div>
          <div className='grid grid-row'>
            <div className='grid-cols-12 text-stone-500 gap-y-1 text-xs'>
              -พิกัดร้าน1

            </div>
            <div className='grid-cols-12 text-stone-500 gap-y-1 text-xs'>

              -พิกัดร้าน2
            </div>
            <div className='grid-cols-12 text-stone-500 gap-y-1 text-xs'>
              -พิกัดร้าน3

            </div>
            <div className='grid-cols-12 text-stone-500 gap-y-1 text-xs'>
              -พิกัดร้าน4

            </div>
            <div className='grid-cols-12 text-stone-500 gap-y-1 text-xs'>
              -พิกัดร้าน5

            </div>
            <div className='grid-cols-12 text-stone-500 gap-y-1 text-xs'>
              -พิกัดร้าน6

            </div>
          </div>
        </div>
        <div className='col-span-2 my-5 mx-3'>
          ทุกวินาทีคือความสุขทำให้สุดๆไปเลย
        </div>
        <div className='col-span-2 grid grid-cols-2 text-center gap-4 mx-3'>


          <div className='col-span-1 block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.8),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-white-700 hover:bg-zinc-100 cursor-pointer'>
            IG
          </div>
          <div className='col-span-1 block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.8),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-white-700 hover:bg-zinc-100 cursor-pointer'>
            FACEBOOK
          </div>
          <div className='col-span-1 block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.8),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-white-700 hover:bg-zinc-100 cursor-pointer'>
            LINE
          </div>
          <div className='col-span-1 block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.8),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-white-700 hover:bg-zinc-100 cursor-pointer'>
            SHOPPEE
          </div>
          <div className='col-span-1 block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.8),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-white-700 hover:bg-zinc-100 cursor-pointer'>
            LEMON8
          </div>


        </div>
      </div>
    </div>
  )
}
