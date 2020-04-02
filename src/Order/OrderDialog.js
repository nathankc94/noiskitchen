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
            You have been emailed confirmation of your order. Thanks for choosing Noi's Kitchen.
          </p>
        </DialogContent>
        <DialogFooter>
          <ConfirmButton onClick={() => {
            setOrders([]);
            setOpenOrderDialog();
          }}>
            I'm still hungry
          </ConfirmButton>
        </DialogFooter>
      </Dialog>
    </> : <div/>
  }
  
  