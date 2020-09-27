import Link from 'next/link'
import { MainLayout } from '../components/MainLayout'

export default function Index() {
  return (
    <MainLayout title={'Home Page'}>
      <h1>Hello Next.js!</h1>
      <p><Link href={'/about'}><a>About</a></Link></p>
      <p><Link href="/posts"><a>Posts</a></Link></p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
    </MainLayout>
  )
}

// NextJS Быстрый Курс - SSR на React JS [2020] | 1:23:20 / 2:34:31 • Создание API мок сервера
