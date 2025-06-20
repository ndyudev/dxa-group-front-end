'use client';

import { Container, Box, Typography, Switch, FormControlLabel } from '@mui/material';
import { useState } from 'react';
import PageHeader from '@/components/common/PageHeader';
import SectionHeader from '@/components/common/SectionHeader';
import PricingCard from '@/components/common/PricingCard';
import FAQ from '@/components/common/FAQ';

// Pricing data
const pricingPlans = [
  {
    id: 'starter',
    title: 'Starter',
    monthlyPrice: '$999',
    yearlyPrice: '$899',
    description: 'Perfect for small businesses getting started with digital marketing.',
    features: [
      { text: 'Basic SEO Optimization', included: true },
      { text: 'Social Media Management (3 platforms)', included: true },
      { text: 'Monthly Analytics Report', included: true },
      { text: 'Email Marketing Campaigns', included: true },
      { text: 'Content Creation (4 posts/month)', included: true },
      { text: 'PPC Campaign Management', included: false },
      { text: 'Advanced Analytics & Reporting', included: false },
      { text: 'Priority Support', included: false },
    ],
    popular: false,
  },
  {
    id: 'professional',
    title: 'Professional',
    monthlyPrice: '$1,999',
    yearlyPrice: '$1,799',
    description: 'Ideal for growing businesses that need comprehensive digital marketing.',
    features: [
      { text: 'Advanced SEO Optimization', included: true },
      { text: 'Social Media Management (5 platforms)', included: true },
      { text: 'Weekly Analytics Report', included: true },
      { text: 'Email Marketing Campaigns', included: true },
      { text: 'Content Creation (8 posts/month)', included: true },
      { text: 'PPC Campaign Management', included: true },
      { text: 'Advanced Analytics & Reporting', included: true },
      { text: 'Priority Support', included: false },
    ],
    popular: true,
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    monthlyPrice: '$3,999',
    yearlyPrice: '$3,599',
    description: 'For large businesses requiring full-service digital marketing solutions.',
    features: [
      { text: 'Comprehensive SEO Strategy', included: true },
      { text: 'Social Media Management (All platforms)', included: true },
      { text: 'Daily Analytics Report', included: true },
      { text: 'Advanced Email Marketing', included: true },
      { text: 'Content Creation (Unlimited)', included: true },
      { text: 'Full PPC Campaign Management', included: true },
      { text: 'Advanced Analytics & Reporting', included: true },
      { text: '24/7 Priority Support', included: true },
    ],
    popular: false,
  },
];

// FAQ data for pricing
const pricingFAQ = [
  {
    id: '1',
    question: 'Can I change my plan at any time?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
    category: 'Billing'
  },
  {
    id: '2',
    question: 'Do you offer custom pricing for large projects?',
    answer: 'Absolutely! For enterprise clients with specific needs, we offer custom pricing and tailored solutions. Contact us for a personalized quote.',
    category: 'Enterprise'
  },
  {
    id: '3',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans. All payments are processed securely.',
    category: 'Payment'
  },
  {
    id: '4',
    question: 'Is there a setup fee?',
    answer: 'No setup fees for our standard plans. Custom enterprise solutions may have a one-time setup fee depending on complexity.',
    category: 'Fees'
  },
  {
    id: '5',
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel your subscription at any time. We provide a 30-day notice period for cancellation.',
    category: 'Cancellation'
  },
  {
    id: '6',
    question: 'Do you offer refunds?',
    answer: 'We offer a 30-day money-back guarantee for new clients. If you\'re not satisfied, we\'ll refund your payment.',
    category: 'Refunds'
  }
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  const handlePlanSelect = (planId: string) => {
    // Handle plan selection - could redirect to contact form or checkout
    console.log('Selected plan:', planId);
    // You can implement navigation to contact page or checkout here
  };

  return (
    <>
      <PageHeader
        title="Pricing Plans"
        subtitle="Choose the Perfect Plan for Your Business"
        description="Transparent pricing with no hidden fees. Choose the plan that best fits your business needs and scale as you grow."
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Pricing Toggle */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <FormControlLabel
            control={
              <Switch
                checked={isYearly}
                onChange={(e) => setIsYearly(e.target.checked)}
                color="primary"
              />
            }
            label={
              <Typography variant="h6">
                {isYearly ? 'Yearly Billing (Save 10%)' : 'Monthly Billing'}
              </Typography>
            }
          />
        </Box>

        {/* Pricing Cards */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 4,
            gridAutoRows: '1fr',
            mb: 12,
          }}
        >
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              title={plan.title}
              price={isYearly ? plan.yearlyPrice : plan.monthlyPrice}
              period={isYearly ? '/month (billed yearly)' : '/month'}
              description={plan.description}
              features={plan.features}
              popular={plan.popular}
              buttonText="Get Started"
              buttonVariant={plan.popular ? 'contained' : 'outlined'}
              onSelect={() => handlePlanSelect(plan.id)}
            />
          ))}
        </Box>

        {/* Additional Information */}
        <Box sx={{ textAlign: 'center', mb: 12 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
            All Plans Include
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            Essential features that come with every plan
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
              gap: 3,
            }}
          >
            {[
              'Free Consultation',
              'Dedicated Account Manager',
              'Monthly Strategy Calls',
              'Performance Reports',
            ].map((feature, index) => (
              <Box key={index} sx={{ textAlign: 'center', p: 2 }}>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {feature}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* FAQ Section */}
        <FAQ
          items={pricingFAQ}
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our pricing and billing"
        />
      </Container>
    </>
  );
} 