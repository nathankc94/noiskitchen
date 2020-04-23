import React from 'react';
import "./style.css"
import {Dialog, DialogContent, DialogShadow, DialogFooter, ConfirmButton} from "../FoodDialog/FoodDialog";

export function OrderDialog({openOrderDialog, setOpenOrderDialog, setOrders}){
    return openOrderDialog ? <>
      <DialogShadow/>
      <Dialog>
        <DialogContent className="container-fluid">
          <h2>Thank you!</h2>
          <p>
            You have been emailed confirmation of your order. 
          </p>
          <p>Thanks for choosing Noi's Kitchen.<span role="img" aria-label="emoji">🧑🏻‍🍳</span></p>
        </DialogContent>
        <DialogFooter>
          <ConfirmButton onClick={() => {
            setOrders([]);
            setOpenOrderDialog();
          }}>
            Close
          </ConfirmButton>
        </DialogFooter>
      </Dialog>
    </> : <div/>
  }
  
  