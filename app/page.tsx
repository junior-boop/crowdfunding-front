import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
export default async function Home() {
  const cookiesStore = await cookies();
  
  const user = cookiesStore.get('userToken')

  // if(user){
  //   redirect('/d')
  // } else {
  //   redirect('/signup')
  // }

  redirect('/d')
}
