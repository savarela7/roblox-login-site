import { useState, useEffect } from 'react'
import { Eye, EyeOff, User, Lock, Search, Menu, Settings, Bell, Plus, RefreshCw } from 'lucide-react'
import './App.css'

// Importar las imágenes de los juegos
import robaUnBrainrot from './assets/FvnW3DYokkxx.jpg'
import surviveTungSahur from './assets/UM0w8vtZ4YDe.jpg'
import comerElMundo from './assets/f2tCoEYM7V4k.jpg'
import webbedObby from './assets/hcjWzIiAXWkw.jpg'
import pesoPlumaObby from './assets/4Jt8fI6JsJmY.jpg'
import towerOfHell from './assets/zEkbec5FF3wa.png'
import ascensorDeTerror from './assets/trNMIg8hvtyz.jpg'
import nochesEnElBosque from './assets/U7LMtiJaFZYu.jpg'
import ladronesBrainrot from './assets/S6u68P6mtuCO.jpg'
import surviveTheKiller from './assets/R0j1f4yRiSA8.jpg'

// Importar las imágenes de los avatares
import avatarZyrOnSky from './assets/avatar_zyronsky.png'
import avatarCamiloSesto from './assets/avatar_camilosesto.png'
import avatarXavierNoClient from './assets/avatar_xaviernoclient.png'
import avatarSOPORTECH from './assets/avatar_soportechi.png'
import avatarEnriqueTriple7 from './assets/avatar_enriquetriple7.png'
import avatarMetalorchavi from './assets/avatar_metalorchavi.png'
import avatarDJarreacronic from './assets/avatar_djarreacronic.png'
import avatarArianna254 from './assets/avatar_arianna254.png'
import avatarXabii30 from './assets/avatar_xabii30.png'
import avatarMeLlamanXavi from './assets/avatar_mellamanxavi.png'

// Importar la imagen de fondo del login
import loginBackground from './assets/login_background.png'

// Importar las imágenes de los captchas de texto
import captchaText1 from './assets/captcha_text_1.png'
import captchaText2 from './assets/captcha_text_2.png'
import captchaText3 from './assets/captcha_text_3.png'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    captcha: ''
  })
  const [currentCaptchaType, setCurrentCaptchaType] = useState('math') // 'math' or 'text'
  const [mathCaptcha, setMathCaptcha] = useState({ num1: 0, num2: 0, answer: 0 })
  const [textCaptcha, setTextCaptcha] = useState({ image: '', answer: '' })
  const [error, setError] = useState('')
  const [showBanMessage, setShowBanMessage] = useState(false)

  const captchaTextImages = [
    { image: captchaText1, answer: 'mdx8n7' },
    { image: captchaText2, answer: 'k2pQ9z' },
    { image: captchaText3, answer: '7sVb3R' }
  ]

  useEffect(() => {
    generateCaptcha()
  }, [])

  const generateCaptcha = () => {
    const types = ['math', 'text']
    const randomType = types[Math.floor(Math.random() * types.length)]
    setCurrentCaptchaType(randomType)

    if (randomType === 'math') {
      generateMathCaptcha()
    } else {
      generateTextCaptcha()
    }
  }

  const generateMathCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1
    const num2 = Math.floor(Math.random() * 10) + 1
    setMathCaptcha({ num1, num2, answer: num1 + num2 })
  }

  const generateTextCaptcha = () => {
    const randomIndex = Math.floor(Math.random() * captchaTextImages.length)
    setTextCaptcha(captchaTextImages[randomIndex])
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    setError('')
    setShowBanMessage(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.username || !formData.password) {
      setError('Por favor completa todos los campos')
      return
    }

    let captchaCorrect = false
    if (currentCaptchaType === 'math') {
      const userAnswer = parseInt(formData.captcha)
      captchaCorrect = (userAnswer === mathCaptcha.answer)
    } else if (currentCaptchaType === 'text') {
      captchaCorrect = (formData.captcha === textCaptcha.answer)
    }

    if (!captchaCorrect) {
      setShowBanMessage(true)
      setTimeout(() => {
        setShowBanMessage(false)
        generateCaptcha() // Regenerar cualquier tipo de captcha
        setFormData(prev => ({ ...prev, captcha: '' }))
      }, 3000)
      return
    }

    // Login exitoso
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setFormData({ username: '', password: '', captcha: '' })
    generateCaptcha()
    setError('')
    setShowBanMessage(false)
  }

  const avatars = [
    { name: 'ZyrOnSky', image: avatarZyrOnSky },
    { name: 'Camilo_Sesto', image: avatarCamiloSesto },
    { name: 'XavierNoClient', image: avatarXavierNoClient },
    { name: 'SOPORTECH...', image: avatarSOPORTECH },
    { name: 'enriquetriple7', image: avatarEnriqueTriple7 },
    { name: 'METALORCHAVI', image: avatarMetalorchavi },
    { name: 'D_jarreacronic...', image: avatarDJarreacronic },
    { name: 'Arianna_254', image: avatarArianna254 },
    { name: 'Xabii30', image: avatarXabii30 },
    { name: 'MeLlamanXavi', image: avatarMeLlamanXavi }
  ]

  if (showBanMessage) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800 flex items-center justify-center p-4">
        <div className="bg-red-600 text-white p-8 rounded-lg text-center max-w-md w-full animate-pulse">
          <div className="text-6xl mb-4">🚫</div>
          <h1 className="text-2xl font-bold mb-4">¡ACCESO DENEGADO!</h1>
          <p className="text-xl font-bold">LO SIENTO, ERES UN ROBOT, BANEADO JAJA</p>
          <div className="mt-4 text-sm opacity-75">
            Redirigiendo en unos segundos...
          </div>
        </div>
      </div>
    )
  }

  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Header */}
        <header className="bg-gray-800 border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Left side */}
              <div className="flex items-center space-x-4">
                <button className="p-2 rounded-md hover:bg-gray-700">
                  <Menu className="w-5 h-5" />
                </button>
                <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                  <div className="w-4 h-4 bg-gray-900 rounded-sm"></div>
                </div>
                <nav className="hidden md:flex space-x-6">
                  <a href="#" className="px-3 py-2 text-sm font-medium text-blue-400 bg-blue-900 rounded">Destacadas</a>
                  <a href="#" className="px-3 py-2 text-sm font-medium text-yellow-400 bg-yellow-900 rounded">Mercado</a>
                  <a href="#" className="px-3 py-2 text-sm font-medium text-purple-400 bg-purple-900 rounded">Crear</a>
                  <a href="#" className="px-3 py-2 text-sm font-medium text-green-400 bg-green-900 rounded">Robux</a>
                </nav>
              </div>

              {/* Center - Search */}
              <div className="flex-1 max-w-lg mx-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Buscar"
                    className="w-full bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Right side */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-blue-600 px-3 py-1 rounded-full">
                  <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center text-xs font-bold text-white">
                    T
                  </div>
                  <span className="text-sm font-medium">{formData.username}</span>
                  <span className="text-xs bg-blue-800 px-2 py-1 rounded">13+</span>
                </div>
                <button className="p-2 rounded-md hover:bg-gray-700 relative">
                  <Bell className="w-5 h-5" />
                </button>
                <div className="flex items-center space-x-1 bg-yellow-600 px-2 py-1 rounded">
                  <span className="text-sm font-bold">0</span>
                </div>
                <button className="p-2 rounded-md hover:bg-gray-700">
                  <Settings className="w-5 h-5" />
                </button>
                <button 
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm font-medium"
                >
                  Salir
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold mb-8">Recomendadas para ti</h1>
          
          {/* Connections Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Conexiones (15)</h2>
              <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                Ver todo →
              </button>
            </div>
            <div className="flex space-x-4 overflow-x-auto pb-2">
              <div className="flex flex-col items-center space-y-2 min-w-0">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center relative">
                  <Plus className="w-6 h-6 text-gray-400" />
                </div>
                <span className="text-xs text-gray-400">Conectar</span>
              </div>
              {avatars.map((avatar, index) => (
                <div key={index} className="flex flex-col items-center space-y-2 min-w-0">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative">
                    <img src={avatar.image} alt={avatar.name} className="w-full h-full object-cover" />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900"></div>
                  </div>
                  <span className="text-xs text-gray-300 truncate max-w-16">{avatar.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Games Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              { title: '[⚡] Roba un Brainrot', rating: '89%', category: 'Recomendado', image: robaUnBrainrot },
              { title: 'Sobrevive a TUNG SAHUR', rating: '94%', category: 'Terror', image: surviveTungSahur },
              { title: 'Comer el Mundo', rating: '94%', category: 'Aventura', image: comerElMundo },
              { title: '¡Webbed! [Obby de 2 jugadores]', rating: '87%', category: 'Obby', image: webbedObby },
              { title: 'Peso Pluma Deldad Obby 🥵🔥', rating: '83%', category: 'Obby', image: pesoPlumaObby },
              { title: 'Torre del Infierno', rating: '73%', category: 'Obby', image: towerOfHell },
              { title: '¡Ascensor de terror! 😨 [ESPECTADOR]', rating: '89%', category: 'Terror', image: ascensorDeTerror },
              { title: '[🦉] 99 Noches en el Bosque 🔦', rating: '91%', category: 'Terror', image: nochesEnElBosque },
              { title: 'Ladrones Brainrot Italianos 🧠🍝', rating: '78%', category: 'Simulador', image: ladronesBrainrot },
              { title: '🔪 ¡Sobrevive al Asesino!', rating: '89%', category: 'Terror', image: surviveTheKiller }
            ].map((game, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors cursor-pointer">
                <div className="relative">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-2 left-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      game.category === 'Recomendado' ? 'bg-blue-600 text-white' :
                      game.category === 'Terror' ? 'bg-red-600 text-white' :
                      game.category === 'Aventura' ? 'bg-green-600 text-white' :
                      game.category === 'Obby' ? 'bg-cyan-600 text-white' :
                      'bg-purple-600 text-white'
                    }`}>
                      {game.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-sm mb-2 line-clamp-2">{game.title}</h3>
                  <div className="flex items-center text-yellow-400 text-sm">
                    <span>👍 {game.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    )
  }

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${loginBackground})` }}
    >
      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-md relative z-10 bg-opacity-90">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-400 mb-2">ROBLOX</h1>
          <h2 className="text-2xl font-semibold text-white mb-2">Iniciar Sesión</h2>
          <p className="text-gray-400">Ingresa a tu cuenta para continuar</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-green-400 mb-2">
              Usuario o Email
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Ingresa tu usuario"
                className="w-full bg-gray-700 text-white pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-yellow-400 mb-2">
              Contraseña
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Ingresa tu contraseña"
                className="w-full bg-gray-700 text-white pl-10 pr-12 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-pink-400 mb-2">
              Captcha
            </label>
            {currentCaptchaType === 'math' ? (
              <div className="bg-gray-700 p-4 rounded-lg mb-3">
                <div className="text-center text-white text-lg font-mono">
                  {mathCaptcha.num1} + {mathCaptcha.num2} = ?
                </div>
              </div>
            ) : (
              <div className="bg-gray-700 p-4 rounded-lg mb-3 flex items-center justify-center relative">
                <img src={textCaptcha.image} alt="Captcha de texto" className="max-w-full h-auto" />
                <button
                  type="button"
                  onClick={generateTextCaptcha}
                  className="absolute right-2 top-2 p-1 rounded-full bg-gray-600 hover:bg-gray-500 text-white"
                  title="Generar nuevo captcha"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            )}
            <input
              type={currentCaptchaType === 'math' ? 'number' : 'text'}
              name="captcha"
              value={formData.captcha}
              onChange={handleInputChange}
              placeholder="Ingresa la respuesta"
              className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600"
              required
            />
          </div>

          {error && (
            <div className="text-red-400 text-sm text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105"
          >
            Iniciar Sesión
          </button>
        </form>

        <div className="mt-6 text-center space-y-2">
          <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">
            ¿Olvidaste tu contraseña?
          </a>
          <div className="text-gray-400 text-sm">
            ¿No tienes cuenta?{' '}
            <a href="#" className="text-blue-400 hover:text-blue-300">
              Regístrate
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App


