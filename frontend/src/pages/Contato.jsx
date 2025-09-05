import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

const Contato = () => {
  const [contatoData, setContatoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchContato();
  }, []);

  const fetchContato = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/contato');
      if (!response.ok) {
        throw new Error('Erro ao carregar informações de contato');
      }
      const data = await response.json();
      setContatoData(data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:3001/api/contato/mensagem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus({
          type: 'success',
          message: data.message || 'Mensagem enviada com sucesso!'
        });
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          assunto: '',
          mensagem: ''
        });
      } else {
        setFormStatus({
          type: 'error',
          message: data.message || 'Erro ao enviar mensagem'
        });
      }
    } catch (err) {
      setFormStatus({
        type: 'error',
        message: 'Erro de conexão. Tente novamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <MessageCircle className="h-16 w-16 text-yellow-400 animate-bounce mx-auto mb-4" />
          <p className="text-xl text-gray-600">Carregando informações...</p>
        </div>
      </div>
    );
  }

  if (error || !contatoData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-red-600">Erro: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Entre em <span className="text-yellow-400">Contato</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Estamos aqui para ajudá-lo a encontrar o carro dos seus sonhos
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">
                    Envie sua Mensagem
                  </CardTitle>
                  <p className="text-gray-600">
                    Preencha o formulário abaixo e entraremos em contato em breve
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nome">Nome *</Label>
                        <Input
                          id="nome"
                          name="nome"
                          type="text"
                          value={formData.nome}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div>
                        <Label htmlFor="telefone">Telefone</Label>
                        <Input
                          id="telefone"
                          name="telefone"
                          type="tel"
                          value={formData.telefone}
                          onChange={handleInputChange}
                          className="mt-1"
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="assunto">Assunto</Label>
                      <Input
                        id="assunto"
                        name="assunto"
                        type="text"
                        value={formData.assunto}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="Assunto da sua mensagem"
                      />
                    </div>

                    <div>
                      <Label htmlFor="mensagem">Mensagem *</Label>
                      <Textarea
                        id="mensagem"
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        required
                        className="mt-1 min-h-[120px]"
                        placeholder="Descreva como podemos ajudá-lo..."
                      />
                    </div>

                    {formStatus.message && (
                      <div className={`flex items-center space-x-2 p-3 rounded-lg ${
                        formStatus.type === 'success' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {formStatus.type === 'success' ? (
                          <CheckCircle className="h-5 w-5" />
                        ) : (
                          <AlertCircle className="h-5 w-5" />
                        )}
                        <span>{formStatus.message}</span>
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      className="w-full bg-yellow-400 hover:bg-yellow-500 text-black"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Enviando...'
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Enviar Mensagem
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Company Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    Informações de Contato
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Endereço</p>
                      <p className="text-gray-600">{contatoData.informacoes.enderecoPrincipal}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Telefone</p>
                      <p className="text-gray-600">{contatoData.informacoes.telefoneGeral}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">WhatsApp</p>
                      <p className="text-gray-600">{contatoData.informacoes.whatsapp}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-purple-500 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">E-mail</p>
                      <p className="text-gray-600">{contatoData.informacoes.emailGeral}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Horário de Funcionamento</p>
                      <p className="text-gray-600">
                        Segunda a Sexta: {contatoData.horarioFuncionamento.segundaASexta}
                      </p>
                      <p className="text-gray-600">
                        Sábado: {contatoData.horarioFuncionamento.sabado}
                      </p>
                      <p className="text-gray-600">
                        Domingo: {contatoData.horarioFuncionamento.domingo}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Departments */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    Departamentos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {contatoData.departamentos.map((dept, index) => (
                      <div key={index} className="border-l-4 border-yellow-400 pl-4">
                        <h4 className="font-medium text-gray-900">{dept.nome}</h4>
                        <p className="text-sm text-gray-600">{dept.responsavel}</p>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="text-sm text-gray-500">{dept.telefone}</span>
                          <span className="text-sm text-gray-500">{dept.email}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    Redes Sociais
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <a href="#" className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all">
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a href="#" className="p-3 bg-blue-600 text-white rounded-lg hover:shadow-lg transition-all">
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="p-3 bg-red-600 text-white rounded-lg hover:shadow-lg transition-all">
                      <Youtube className="h-5 w-5" />
                    </a>
                    <a href="#" className="p-3 bg-blue-700 text-white rounded-lg hover:shadow-lg transition-all">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                  <div className="mt-4 space-y-1 text-sm text-gray-600">
                    <p>Instagram: {contatoData.redesSociais.instagram}</p>
                    <p>Facebook: {contatoData.redesSociais.facebook}</p>
                    <p>YouTube: {contatoData.redesSociais.youtube}</p>
                    <p>LinkedIn: {contatoData.redesSociais.linkedin}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços para atender todas as suas necessidades automotivas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contatoData.servicos.map((servico, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg border border-yellow-200"
              >
                <CheckCircle className="h-6 w-6 text-yellow-600 mb-3" />
                <h3 className="font-medium text-gray-900">{servico}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;

