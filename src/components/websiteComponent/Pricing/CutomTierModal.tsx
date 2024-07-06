import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const CutomTierModal = () => {
  return (
    <div className="">
      <Dialog>
        <DialogTrigger>
          {" "}
          <Button variant="getStarted"> Custom Tier </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <div className="grid w-full   gap-1.5 mt-10">
                <Label htmlFor="email" className="mb-2 text-lg">
                  Your Name
                </Label>
                <Textarea placeholder="Write your requirements..." cols={15} />
              </div>
              <div className=" mt-5 text-end">
                {" "}
                <Button variant="btn2"> Submit </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CutomTierModal;
