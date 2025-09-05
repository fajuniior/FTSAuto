import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  User,
  Car,
  Star,
  Navigation,
  Building
} from 'lucide-react';
import { motion } from 'framer-motion';

// Importar imagens das lojas
import lojaSaoPauloImage from '@/assets/images/loja-sao-paulo.jpg';
import lojaRioDeJaneiroImage from '@/assets/images/loja-rio-de-janeiro.jpg';
import lojaBrasiliaImage from '@/assets/images/loja-brasilia.jpg';

const Lojas = () => {
  const [lojas, setLojas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mapeamento de imagens para as lojas
  const storeImages = {
    'FTSAuto São Paulo - Matriz': lojaSaoPauloImage,
    'FTSAuto Rio de Janeiro': lojaRioDeJaneiroImage,
    'FTSAuto Brasília': lojaBrasiliaImage,
  };

  useEffect(() => {
    fetchLojas();
  }, []);

  const fetchLojas = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/lojas');
      if (!response.ok) {
        throw new Error('Erro ao carregar lojas');
      }
      const data = await response.json();
      setLojas(data.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Building className="h-16 w-16 text-yellow-400 animate-bounce mx-auto mb-4" />
          <p className="text-xl text-gray-600">Carregando lojas...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-red-600">Erro: {error}</p>
          <Button onClick={fetchLojas} className="mt-4">
            Tentar Novamente
          </Button>
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
              Nossas <span className="text-yellow-400">Lojas</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Visite uma de nossas lojas e conheça de perto nossa coleção exclusiva de carros de luxo
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stores Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {lojas.map((loja, index) => (
              <motion.div
                key={loja.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                  {/* Store Image */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                    {storeImages[loja.nome] ? (
                      <img 
                        src={storeImages[loja.nome]}
                        alt={`${loja.nome}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Building className="h-16 w-16 text-gray-400" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-yellow-400 text-black">
                        {index === 0 ? 'Matriz' : 'Filial'}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">
                      {loja.nome}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Contact Info */}
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-gray-700 text-sm font-medium">Endereço</p>
                          <p className="text-gray-600 text-sm">{loja.endereco}</p>
                          <p className="text-gray-500 text-xs">CEP: {loja.cep}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <div>
                          <p className="text-gray-700 text-sm font-medium">Telefone</p>
                          <p className="text-gray-600 text-sm">{loja.telefone}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-blue-500 flex-shrink-0" />
                        <div>
                          <p className="text-gray-700 text-sm font-medium">E-mail</p>
                          <p className="text-gray-600 text-sm">{loja.email}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Clock className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-gray-700 text-sm font-medium">Horário</p>
                          <p className="text-gray-600 text-sm">{loja.horario}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <User className="h-5 w-5 text-orange-500 flex-shrink-0" />
                        <div>
                          <p className="text-gray-700 text-sm font-medium">Gerente</p>
                          <p className="text-gray-600 text-sm">{loja.gerente}</p>
                        </div>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div>
                      <p className="text-gray-700 text-sm font-medium mb-2">Especialidades</p>
                      <div className="flex flex-wrap gap-2">
                        {loja.especialidades.map((especialidade, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {especialidade}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Services */}
                    <div>
                      <p className="text-gray-700 text-sm font-medium mb-2">Serviços</p>
                      <ul className="space-y-1">
                        {loja.servicos.slice(0, 3).map((servico, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <Star className="h-3 w-3 text-yellow-400" />
                            <span className="text-gray-600 text-xs">{servico}</span>
                          </li>
                        ))}
                        {loja.servicos.length > 3 && (
                          <li className="text-gray-500 text-xs">
                            +{loja.servicos.length - 3} outros serviços
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2 pt-4">
                      <Button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black">
                        <Navigation className="h-4 w-4 mr-2" />
                        Como Chegar
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Phone className="h-4 w-4 mr-2" />
                        Ligar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Visite uma de nossas lojas
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Nossa equipe especializada está pronta para ajudá-lo a encontrar o carro perfeito
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
                <Car className="h-5 w-5 mr-2" />
                Agendar Test Drive
              </Button>
              <Button variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white">
                <Phone className="h-5 w-5 mr-2" />
                Ligar
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Lojas;



