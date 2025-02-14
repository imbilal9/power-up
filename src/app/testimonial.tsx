"use client";

import React from "react";
import Image from "next/image";

interface Testimonial {
  name: string;
  quote: string;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    name: "राकेश गुप्ता",
    quote:
      "अतिरिक्त हस्तमैथुन के कारण, मेरा लिंग छोटा हो गया और मुझे शीघ्रपतन वाली समस्या का सामना करना पड़ा। मेरे करीबी दोस्त ने मुझे X Power Power के बारे में समझाया और मुझे इस उत्पाद का उपयोग करने का भी सुझाव दिया। 1 महीने के लिए इसका उपयोग करने के बाद, मेरे लिंग का आकार 8 Inch तक बढ़ गया है।",
    imageUrl: "/assets/imgx.jpeg",
  },
  {
    name: "कीटु",
    quote:
      "मेरी बीवी मज़ाक करती थी कि वो मुझे छोड़ कर जाने वाली है मैंने फैसला किया कि अपनी बीवी को एक नई चीज से सरप्राइज़ दूँगा और मैंने X Power Gold खरीद ली। मेरा आत्म-विश्वास बढ़ गया और मैं एक गबरू मर्द जैसा महसूस करने लगा।",
    imageUrl: "/assets/imgy.webp",
  },
  {
    name: "कमल",
    quote:
      "मेरा 4 Inch का था। लड़कियाँ हमेशा मुझ पर हँसती थीं। मैं फिलहाल X Power Gold Capsule ली रहा हूँ और मेरा लिंग 8 Inch हो चुका है। अब मैं दो सेमी और बड़ा करना चाहता हूँ लेकिन मेरा आत्मविश्वास बहुत बढ़ चुका है। विश्वास नहीं होता कि कुछ दिनों पहले तक मेरी जीने की इच्छा तक खत्म हो गई थी!।",
    imageUrl: "/assets/imgz.webp",
  },
  {
    name: "Neeraj Kumar",
    quote:
      "मेरे लाइफ को खुशहाल बनाने के लिए Thanks X Power Gold अब अपने को मैं पूरी संतुष्टि दे पा रहा हूँ। जब से मैंने इस दवाई का सेवन किया है तब से मैं अपने अंदर एक अलग ही ऊर्जा का अनुभव कर पा रहा हूँ। Thanks X Power Gold।",
    imageUrl: "/assets/imga.jpeg",
  },
];

const UserTestimonial: React.FC = () => {
  return (
    <div className="px-4 py-8 bg-gray-100">
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">✨ ग्राहकों की राय ✨</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-box flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 p-6 border border-gray-300 bg-white rounded-xl shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            {/* Image Section */}
            <Image
              src={testimonial.imageUrl}
              alt={testimonial.name}
              width={80}
              height={80}
              className="rounded-full object-cover"
            />

            {/* Text Content */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
              <p className="text-sm text-gray-700 mt-1 leading-relaxed">{testimonial.quote}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserTestimonial;
