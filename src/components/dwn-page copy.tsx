import React, {useState ,useEffect} from 'react'
import { Web5, Record } from "@web5/api";
import protocolDefinition from "@/utils/profile.protocol.json"


const DwnPage = () => {
    const [myWeb5, setMyWeb5] = useState<Web5 | null>(null);
    const [myDid, setMyDid] = useState<string>("");

    useEffect(() => {
      
        const initWeb5 = async () => {
            // @ts-ignore
            // const { Web5 } = await import('@web5/api/browser');

            try {
                const { web5, did } = await Web5.connect({ sync: '5s' });
                setMyWeb5(web5);
                setMyDid(did);
                console.log(web5);
                if (web5 && did) {
                    console.log('Web5 initialized');
                    // await configureProtocol(web5, did);
                    const { records } = await web5.dwn.records.query({
                        message: {
                            filter: {
                                schema: protocolDefinition.types.person.schema,
                            },
                        },
                    });

                    console.log('records', records)
                }
            } catch (error) {
                console.error('Error initializing Web5:', error);
            }
        };

        initWeb5();


    }, [])
    

  return (
    <div>DwnPage</div>
  )
}

export default DwnPage;