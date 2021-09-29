      display: inline-block;
      position: ${({centerX:e,centerY:t})=>e||t?"absolute":"relative"};
      top: calc(${({centerY:e})=>e} - ${({radius:e})=>e});
      left: calc(${({centerX:e})=>e} - ${({radius:e})=>e});
      border-radius: 50%;
      overflow: hidden;
    `,list:d["b"]`
      position: relative;
      list-style: none;
      padding: 0;
      margin: 0;
      border-radius: 50%;
      width: calc(2 * ${({radius:e})=>e});
      height: calc(2 * ${({radius:e})=>e});
    `,item:d["b"]`
      width: ${({centralAngle:e})=>e>90?"100%":"50%"};
      height: ${({centralAngle:e})=>e>90?"100%":"50%"};
      bottom: ${({centralAngle:e})=>e>90?"50%":"initial"};
      right: ${({centralAngle:e})=>e>90?"50%":"initial"};
      position: absolute;
      transform: rotate(${({startAngle:e,endAngle:t})=>e+t}deg) skew(${({skew:e})=>e}deg);
      transform-origin: bottom right;
      overflow: hidden;
      border: 2px solid radial-gradient(transparent 10 #3477de 100});
    `,center:d["b"]`
      position: absolute;
      border-radius: 50%;
      background: transparent;
      border: 2px solid #3477de;
      top: calc(50% - ${({centerRadius:e})=>e});
      left: calc(50% - ${({centerRadius:e})=>e});
      width: calc(2 * ${({centerRadius:e})=>e});
      height: calc(2 * ${({centerRadius:e})=>e});
    `},slice:{container:d["b"]`
      cursor: pointer;
      width: 200%;
      height: 200%;
      transform-origin: 50% 50%;
      border-radius: 50%;
      transform: ${({skew:e,polar:t,centralAngle:n})=>`skew(${-e}deg) rotate(${(t?90:n)/2-90}deg)`};
      color: #000;
      background: radial-gradient(transparent ${({centerRadius:e})=>`${e}, white ${e}`});
      border: 5px solid #3477de;
      outline: none;
      &:hover {
        color: white;
        background: radial-gradient(transparent ${({centerRadius:e})=>`${e},  #3477de ${e}`});
      }
    `,contentContainer:d["b"]`
      position: absolute;
      width: 100%;
      text-align: center;
      top: ${({radius:e,centralAngle:t,centerRadius:n,contentHeight:a})=>`calc((${t>90?"50% + ":""}${e} - ${n}) / 2 - ${a} / 2)`};
    `,content:d["b"]`
      display: inline-block;
      transform: rotate(${({angle:e})=>-e}deg);