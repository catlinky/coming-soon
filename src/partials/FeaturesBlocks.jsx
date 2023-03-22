import React from 'react';
import FeatBlockImg1 from '../images/block-1.png';
import FeatBlockImg2 from '../images/block-1.png';
import FeatBlockImg3 from '../images/block-1.png';
import FeatBlockImg4 from '../images/block-1.png';
import FeatBlockImg5 from '../images/block-1.png';
import FeatBlockImg6 from '../images/block-1.png';

function FeaturesBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">
              Are you tired of cluttered bios and juggling multiple links for
              your online presence?
            </h2>
            <p className="text-xl text-gray-400">
              Say hello to our platform - your one-stop-shop for bio links,
              e-commerce, appointments, and more.
            </p>
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {/* 1st item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <img
                className="max-w-full mx-auto md:max-w-none h-auto"
                src={FeatBlockImg1}
                width="80"
                alt="Features 01"
              />
              <h4 className="h4 mb-2">Customizable Bio Link</h4>
              <p className="text-lg text-gray-400 text-center">
                Showcase all of your important links in one place
              </p>
            </div>

            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <img
                className="max-w-full mx-auto md:max-w-none h-auto"
                src={FeatBlockImg2}
                width="80"
                alt="Features 02"
              />
              <h4 className="h4 mb-2">Online Store</h4>
              <p className="text-lg text-gray-400 text-center">
                Sell products directly from your bio link with our e-commerce
                integration.
              </p>
            </div>

            {/* 4th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <img
                className="max-w-full mx-auto md:max-w-none h-auto"
                src={FeatBlockImg3}
                width="80"
                alt="Features 03"
              />
              <h4 className="h4 mb-2">Appointment Scheduling</h4>
              <p className="text-lg text-gray-400 text-center">
                Allow clients to schedule appointments with you directly from
                your bio link.
              </p>
            </div>

            {/* 5th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <img
                className="max-w-full mx-auto md:max-w-none h-auto"
                src={FeatBlockImg4}
                width="80"
                alt="Features 04"
              />
              <h4 className="h4 mb-2">Analytics and Tracking</h4>
              <p className="text-lg text-gray-400 text-center">
                Measure the success of your bio link and e-commerce store with
                analytics and tracking.
              </p>
            </div>

            {/* 6th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <img
                className="max-w-full mx-auto md:max-w-none h-auto"
                src={FeatBlockImg5}
                width="80"
                alt="Features 05"
              />
              <h4 className="h4 mb-2">Social Media Integration</h4>
              <p className="text-lg text-gray-400 text-center">
                Connect your social media accounts to your bio link for a
                seamless experience.
              </p>
            </div>
            {/* 3rd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <img
                className="max-w-full mx-auto md:max-w-none h-auto"
                src={FeatBlockImg6}
                width="80"
                alt="Features 06"
              />
              <h4 className="h4 mb-2">And More...</h4>
              <p className="text-lg text-gray-400 text-center">
                We have lot of new things coming for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
