basic.forever(function () {
    basic.showNumber(minode.DHTGetHumidity(ConnName.D12))
    if (minode.DHTGetHumidity(ConnName.D12) > 76) {
        minode.FanControl_1(AnalogConnName.Analog_A1, 100)
    } else {
        minode.FanControl_1(AnalogConnName.Analog_A1, 0)
    }
})
