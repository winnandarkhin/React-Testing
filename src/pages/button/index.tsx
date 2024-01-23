import { useState } from "react"

export const TestButton = () => {

    const [isLogin, setIsLogin] = useState(false)
    return <div>
        {
            isLogin ? <button>Welcome</button> : <button onClick={() => setIsLogin(true)}>Login</button>
        }
    </div>
}

export default TestButton