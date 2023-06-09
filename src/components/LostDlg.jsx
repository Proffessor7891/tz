
const LostDlg = ({onClose,  depositAmount = 0, chain, numberOfBoxs }) => {
    return (
        // <section className="fixed top-0 left-0 z-50 flex items-center justify-center w-full min-h-screen popup">
        //   <div className="popup-other bg-green-500">
        //     <div className="container">
        //       <div className="mx-auto connect-popup">
        //         <div className="flex items-center justify-between px-6 py-6 popup-head">
        //           <div
        //             className="cursor-pointer closebtn"
        //             onClick={() => {
        //                 onClose()
        //             }}
        //           >
        //             <img
        //               src="images/closebtn.png"
        //               alt="close"
        //               className="ml-auto"
        //             />
        //           </div>
        //         </div>
                <div className="px-3 text-center">
                  <div className="flex justify-center">
                    <img
                      src="images/creation_complete.png"
                      alt="casual"
                      className="mx-auto"
                    />
                  </div>
                  <h6 className="mt-3 mb-1 text-sm font-bold text-white md:text-2xl">
                    Lost !
                  </h6>
                  <p className="mb-5 text-xs text-white md:text-lg">
                    You 've lost {" "}
                    { depositAmount  >= 0 ? depositAmount : "0"}{" "}
                    {chain === "solana"? "SOL" : "HEDERA" }{" "}
                  </p>
                </div>
        //       </div>
        //     </div>
        //   </div>
        // </section>
    )
}

export default LostDlg;