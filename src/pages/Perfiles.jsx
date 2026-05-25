import Layout from '../components/Layout'
import MemberList from '../components/MemberList'

function Perfiles() {
  return (
    <Layout>
      <div style={{ backgroundColor: "white", padding: "20px" }}>
        <h1 style={{ color: "var(--text)" }}>Perfiles</h1>

        <MemberList />
      </div>
    </Layout >
  )
}

export default Perfiles
