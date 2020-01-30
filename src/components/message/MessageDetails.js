// import React, { useContext } from 'react'
// // import { CustomerContext } from '../customer/CustomerProvider'
// // import { LocationContext } from '../location/LocationProvider'
// import { MessageContext } from './MessageProvider'
// import './Messages.css'

// export default props => {
//   const { theMessages, releaseMessage } = useContext(MessageContext)
// //   const { theLocations } = useContext(LocationContext)
// //   const { theCustomers } = useContext(CustomerContext)

//   const chosenMessageId = parseInt(props.match.params.messageId, 10)

//   const theMessage = theMessages.find(mes => mes.id === chosenMessageId) || {}
// //   const theCustomer = theCustomers.find(cus => cus.id === theAnimal.customerId) || {}
// //   const theLocation = theLocations.find(loc => loc.id === theAnimal.locationId) || {}

//   return (
//     <section className='message'>
//       <h3 className='message__name'>{theMessage.messages}</h3>
//       {/* <div className='message__breed'>{theMessage.breed}</div> */}
//       {/* <div className='animal__location'>Location: {theLocation.name}</div> */}
//       {/* <div className='animal__owner'>Customer: {theCustomer.name}</div> */}

//       <button
//         onClick={() => {
//           props.history.push(`/messages/edit/${theMessage.id}`)
//         }}> Edit
//       </button>

//       <button
//         onClick={() => {
//           releaseMessage(theMessage.id).then(() => {
//             props.history.push('/messages')
//           })
//         }}
//       >
//         Release Message
//       </button>
//     </section>
//   )
// }
