import { Html, useProgress } from "@react-three/drei"

function CanvasLoader() {
    const { progress } = useProgress()

  return (
    <Html
        ad="div"
        center
        style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            
        }}    
    >
        <span className="canva-loader" />
        <p style={{
            fontSize: 14, 
            color: '#f1f1f1', 
            fontWeight: 800, marginTop: 40
            }}>
                {progress!==0?
                `${progress.toFixed(2)}%`:"Loading..."}
        </p>
        
    </Html>
  )
}

export default CanvasLoader