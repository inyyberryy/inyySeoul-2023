// server-side rendering: 서버에서 랜더링해서 유저한테 보여줌 (page들이 이 기법 사용)
// user-side rendering (= client-side rendering): 페이지에서 변경되는 ui가 하나라도 있을 때 사용  (component가 이 기법 사용)
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      Home
    </div>
  )
}