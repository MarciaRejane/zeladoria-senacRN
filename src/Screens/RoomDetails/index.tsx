import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Header } from '../../components/Header';

import { 
  Container, 
  Content, 
  StatusCard, 
  StatusText, 
  InfoBox, 
  InfoTitle,
  InfoRow,
  InfoText,
  ObservationInput,
  ActionButton,
  ActionButtonText
} from './styles';

type RouteParams = { roomId: string; }

export function RoomDetails() {
  const [isRegistering, setIsRegistering] = useState(false);
  const route = useRoute();
  const { roomId } = route.params as RouteParams;

  const room = {
    title: `Sala ${roomId}`,
    status: 'Pendente',
    lastCleaned: {
      date: '03 Ago 2025',
      time: '17:20',
      responsible: 'Arquileide'
    }
  };

  return (
    <Container>
      <Header title={room.title} />
      <Content>
        {isRegistering ? (
          <>
            <InfoTitle>Como estava a sala antes da limpeza?</InfoTitle>
            <ObservationInput 
              placeholder="Digite suas observações aqui..."
              multiline
            />
            <ActionButton variant="green">
              <ActionButtonText>Enviar Observações</ActionButtonText>
            </ActionButton>
            <ActionButton variant="red">
              <ActionButtonText>Sem Observações</ActionButtonText>
            </ActionButton>
          </>
        ) : (
          <>
            <StatusCard>
              <StatusText>Limpeza {room.status}</StatusText>
            </StatusCard>

            <InfoBox>
              <InfoTitle>Limpo pela última vez em:</InfoTitle>
              <InfoRow><InfoText>Data</InfoText><InfoText>{room.lastCleaned.date}</InfoText></InfoRow>
              <InfoRow><InfoText>Hora</InfoText><InfoText>{room.lastCleaned.time}</InfoText></InfoRow>
              <InfoRow><InfoText>Responsável</InfoText><InfoText>{room.lastCleaned.responsible}</InfoText></InfoRow>
            </InfoBox>

            <ActionButton variant="blue" onPress={() => setIsRegistering(true)}>
              <ActionButtonText>Registrar Limpeza</ActionButtonText>
            </ActionButton>
          </>
        )}
      </Content>
    </Container>
  );
}




















// import React, { useState } from 'react';
// import { useRoute } from '@react-navigation/native';
// import { Header } from '../../components/Header';

// import { 
//   Container, 
//   Content, 
//   StatusCard, 
//   StatusText, 
//   InfoBox, 
//   InfoTitle,
//   InfoRow,
//   InfoText,
//   ObservationInput,
//   ActionButton,
//   ActionButtonText
// } from './styles';

// // Tipagem para os parâmetros da rota
// type RouteParams = {
//   roomId: string;
// }

// export function RoomDetails() {
//   const [isRegistering, setIsRegistering] = useState(false);
//   const route = useRoute();
//   const { roomId } = route.params as RouteParams;

//   // No futuro, buscaremos os dados da sala da API usando o roomId
//   // Por enquanto, vamos usar dados fixos para o exemplo
//   const room = {
//     title: 'Sala 101, Auditório Principal',
//     status: 'Pendente',
//     lastCleaned: {
//       date: '03 Ago 2025',
//       time: '17:20',
//       responsible: 'Arquibaldo'
//     }
//   };

//   return (
//     <Container>
//       <Header title={room.title} />

//       <Content>
//         {isRegistering ? (
//           // --- MODO DE REGISTRO ---
//           <>
//             <InfoTitle>Como estava a sala antes da limpeza?</InfoTitle>
//             <ObservationInput 
//               placeholder="Digite suas observações aqui..."
//               multiline
//             />
//             <ActionButton variant="green">
//               <ActionButtonText>Enviar Observações</ActionButtonText>
//             </ActionButton>
//             <ActionButton variant="red">
//               <ActionButtonText>Sem Observações</ActionButtonText>
//             </ActionButton>
//           </>
//         ) : (
//           // --- MODO DE VISUALIZAÇÃO ---
//           <>
//             <StatusCard>
//               <StatusText>Limpeza {room.status}</StatusText>
//             </StatusCard>

//             <InfoBox>
//               <InfoTitle>Limpo pela última vez em:</InfoTitle>
//               <InfoRow>
//                 <InfoText>Data</InfoText>
//                 <InfoText>{room.lastCleaned.date}</InfoText>
//               </InfoRow>
//               <InfoRow>
//                 <InfoText>Hora</InfoText>
//                 <InfoText>{room.lastCleaned.time}</InfoText>
//               </InfoRow>
//               <InfoRow>
//                 <InfoText>Responsável</InfoText>
//                 <InfoText>{room.lastCleaned.responsible}</InfoText>
//               </InfoRow>
//             </InfoBox>

//             <ActionButton variant="blue" onPress={() => setIsRegistering(true)}>
//               <ActionButtonText>Registrar Limpeza</ActionButtonText>
//             </ActionButton>
//           </>
//         )}
//       </Content>
//     </Container>
//   );
// }