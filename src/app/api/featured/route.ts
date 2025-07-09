import { GET as RCC } from "./RCC/route";
import { GET as bridges } from "./bridges/route";
import { GET as composite } from "./composite/route";
import { GET as seismic } from "./seismic/route";
import { GET as steel } from "./steel/route";
import { GET as tunnelsunderground } from "./tunnelsunderground/route";


export const dynamic = "force-dynamic";

export async function GET() {
  
  const RCCResponse = await RCC();
  const bridgesResponse = await bridges();
  const compositeResponse = await composite();
  const seismicResponse = await seismic();
  const steelResponse = await steel();
  const tunnelsundergroundResponse = await tunnelsunderground();

  return new Response(
    JSON.stringify([
     
      ...(await RCCResponse.json()),
      ...(await bridgesResponse.json()),
      ...(await compositeResponse.json()),
      ...(await seismicResponse.json()),
      ...(await steelResponse.json()),
      ...(await tunnelsundergroundResponse.json()),

     
    ])
  );
}
