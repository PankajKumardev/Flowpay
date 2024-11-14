"use client";

import { useState } from "react";
import { Card } from "@repo/ui/card";
import { Textinput } from "@repo/ui/textinput";
import { Select } from "@repo/ui/select";
import { Button } from "@repo/ui/button";
const SUPPORTED_BANKS = [
  {
    name: "HDFC Bank",
    redirectUrl: "https://netbanking.hdfcbank.com",
  },
  {
    name: "Axis Bank",
    redirectUrl: "https://www.axisbank.com/",
  },
];

export const AddMoney = () => {
  const [value, setValue] = useState(0)
  const [redirectUrl, setRedirectUrl] = useState(
    SUPPORTED_BANKS[0]?.redirectUrl,
  );
  return (
    <Card title="Add Money">
      <div className="w-full">
        <Textinput
          label={"Amount"}
          placeholder={"Amount"}
          onChange={(val) => {
            setValue(Number(val));
          }}
        />
        <div className="py-4 text-left">Bank</div>
        <Select
          onSelect={(value) => {
            setRedirectUrl(
              SUPPORTED_BANKS.find((x) => x.name === value)?.redirectUrl || "",
            );
          }}
          options={SUPPORTED_BANKS.map((x) => ({
            key: x.name,
            value: x.name,
          }))}
        />
        <div className="flex justify-center pt-4">
          <Button
            onClick={() => {
              window.location.href = redirectUrl || "";
            }}
          >
            Add Money
          </Button>
        </div>
      </div>
    </Card>
  );
};
